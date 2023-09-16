import express, { Request, Response, NextFunction } from "express";
import PDFDocument from "pdfkit";
import path from "path";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/generate", (req, res) => {
  const doc = new PDFDocument();

  // ヘッダーを設定してPDFとしてレスポンスを送る
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'attachment; filename="SkillSheet.pdf"');

  // ここに追加
  const fontPath = path.join(__dirname, "fonts/NotoSansJP-VariableFont_wght.ttf");
  doc.font(fontPath);

  doc.pipe(res);

  // PDFの内容を追加
  doc.fontSize(25).text("あなたのスキルシート", 50, 50);
  doc.moveDown();
  doc.text(`得意な技術: ${req.body.technology}`);
  doc.moveDown();
  doc.text(`経歴: ${req.body.experience}`);
  doc.moveDown();
  doc.text(`自己PR: ${req.body.pr}`);
  doc.end();
});


// エラーハンドリングミドルウェア
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).send('Something went wrong! Please try again later.');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
