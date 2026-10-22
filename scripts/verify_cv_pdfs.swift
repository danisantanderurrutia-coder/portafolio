import PDFKit
import Foundation
// Usage: swift scripts/verify_cv_pdfs.swift  -> page count + text-selectable check per CV
let dir = "public/cv/"
let expected = ["Daniel_Santander_CV_EN_1p.pdf":1,"Daniel_Santander_CV_EN_2p.pdf":2,"Daniel_Santander_CV_ES_1p.pdf":1,"Daniel_Santander_CV_ES_2p.pdf":2]
var bad = false
for (f,n) in expected.sorted(by:{$0.key<$1.key}) {
  guard let d = PDFDocument(url: URL(fileURLWithPath: dir+f)) else { print("FAIL open \(f)"); bad = true; continue }
  let txt = d.string ?? ""
  let ok = d.pageCount == n && txt.contains("danisantander.urrutia@gmail.com") && txt.contains("santanderurrutia") && txt.count > 1500
  print("\(ok ? "OK  " : "FAIL") \(f): pages=\(d.pageCount) (expected \(n)), chars=\(txt.count)")
  if !ok { bad = true }
  for i in 0..<d.pageCount { let t = d.page(at:i)?.string ?? ""; print("     p\(i+1): \(t.count) chars") }
}
exit(bad ? 1 : 0)
