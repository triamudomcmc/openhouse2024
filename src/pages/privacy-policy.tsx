import React from "react"
import fs from "fs"
import { join } from "path"
import markdownToHtml from "@/lib/markdownToHTML"
import { NextPage } from "next"

const PP: NextPage<{ content: string }> = ({ content }) => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full h-full px-8 pt-[6.5rem] pb-[2rem] bg-gradient-to-br from-[#FFDE74] from-0% via-[#FC7ADB] via-50% to-[#4924D1] to-100% ">
        <h1 className="text-xl mt-4 mb-4 font-bold text-[#33007B] md:text-4xl">นโยบายความเป็นส่วนตัว</h1>

        <article
          className="prose lg:prose-xl leading-6 text-[#33007B] prose-p:inline font-texts bg-white lg:rounded-[119px] md:rounded-[85px] sm:rounded-[23px] lg:px-20 lg:py-10 md:px-10 md:py-5 sm:px-3 sm:py-1 bg-opacity-50 "
          id="tos"
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>
      </div>
  )
}

export async function getStaticProps() {
  const pp = join(process.cwd(), "/src/_data/pp.md")
  const fileContents = fs.readFileSync(pp, "utf8")

  const content = await markdownToHtml(fileContents || "")

  return {
    props: {
      content,
    },
  }
}

export default PP
