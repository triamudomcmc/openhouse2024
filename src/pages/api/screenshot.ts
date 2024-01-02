// import puppeteer from "puppeteer-core";
// import chromium from "chrome-aws-lambda";
// import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";

// const capture = async (url:string, width = 1080, height = 1920) => {
//     const options = process.env.AWS_REGION
//       ? {
//           args: [
//             "--no-sandbox",
//             "--disable-setuid-sandbox",
//             "--disable-dev-shm-usage",
//             "--single-process",
//           ],
//           executablePath: await chromium.executablePath,
//           headless: chromium.headless,
//           ignoreDefaultArgs: ["--disable-extensions"],
//         }
//       : {
//           args: [],
//           executablePath:
//             process.platform === "win32"
//               ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
//               : process.platform === "linux"
//               ? "/usr/bin/google-chrome"
//               : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
//         };
  
//     const browser = await puppeteer.launch(options);
  
//     try {
//       const page = await browser.newPage();
//       await page.setViewport({ width, height });
//       await page.goto(url, { waitUntil: "networkidle0" });
//       return await page.screenshot({ type: "jpeg", omitBackground: true });
//     } finally {
//       await browser.close();
//     }
//   };
  
//   export default async function handler(request:NextApiRequest, res:NextApiResponse) {
//     try {
//       const file = await capture(request.body.url);
//       console.log(typeof file);
//       res.setHeader("Content-Type", `image/jpeg`);
//       res.setHeader(
//         "Cache-Control",
//         `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
//       );
//       res.statusCode = 200;
//       res.end(file);
//     } catch (err) {
//       console.error(err);
//       return res.status(500).send("Internal Server Error");
//     }
//   }

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'Missing required parameter: url' });
  }

  console.log(url)
  const encodedUrl = encodeURIComponent(url);
  const apiURL = `https://api.screenshotone.com/take?access_key=Sc1jnDprSQ769Q&url=${encodedUrl}&viewport_width=1080&viewport_height=1920&device_scale_factor=1&format=jpg&image_quality=80&block_ads=true&block_cookie_banners=true&block_banners_by_heuristics=false&block_trackers=true&delay=0&timeout=60`;

  console.log(apiURL);
  try {
    const response = await axios.get(apiURL, {
      responseType: 'arraybuffer',
    });
    console.log(response);
    res.setHeader("cache-control", "private, no-cache, max-age=0, no-transform")
    res.setHeader('Content-Type', 'image/jpeg');

    res.status(200).send(Buffer.from(response.data, 'binary'));
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
