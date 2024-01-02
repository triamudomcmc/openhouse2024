import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import type { NextApiRequest, NextApiResponse } from 'next'

const capture = async (url:string, width = 1080, height = 1920) => {
    const options = process.env.AWS_REGION
      ? {
          args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
            "--single-process",
          ],
          executablePath: await chromium.executablePath(),
          headless: chromium.headless,
          ignoreDefaultArgs: ["--disable-extensions"],
        }
      : {
          args: [],
          executablePath:
            process.platform === "win32"
              ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
              : process.platform === "linux"
              ? "/usr/bin/google-chrome"
              : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        };
  
    const browser = await puppeteer.launch(options);
  
    try {
      const page = await browser.newPage();
      await page.setViewport({ width, height });
      await page.goto(url, { waitUntil: "networkidle0" });
      return await page.screenshot({ type: "jpeg", omitBackground: true });
    } finally {
      await browser.close();
    }
  };
  
  export default async function handler(request:NextApiRequest, res:NextApiResponse) {
    try {
      const file = await capture(request.body.url);
      console.log(typeof file);
      res.setHeader("Content-Type", `image/jpeg`);
      res.setHeader(
        "Cache-Control",
        `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
      );
      res.statusCode = 200;
      res.end(file);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  }