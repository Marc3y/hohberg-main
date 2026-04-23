import path from 'path'
import fs from 'fs'
import ReactMarkdown from 'react-markdown'

export async function DatenschutzSection() {
  const filePath = path.join(process.cwd(), 'content', 'datenschutz.md')

  if (!fs.existsSync(filePath)) {
    return (
      <div className="flex-1 flex items-center justify-center py-20 px-6 text-[#3D5260]">
        Datenschutzerklärung ist derzeit nicht verfügbar.
      </div>
    )
  }

  const fileContent = fs.readFileSync(filePath, 'utf8')

  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-6 sm:px-12 py-14">
      <div className="prose prose-headings:text-[#2D5A3D] prose-a:text-[#2D5A3D] prose-strong:text-[#1C1C1C] max-w-none text-[#3D5260] text-base leading-relaxed">
        <ReactMarkdown>{fileContent}</ReactMarkdown>
      </div>
    </div>
  )
}

export default DatenschutzSection
