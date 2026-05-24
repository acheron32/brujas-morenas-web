import fs from 'fs';
import path from 'path';

export default function MazosOnlinePage() {
  const htmlPath = path.join(process.cwd(), 'public/mazos-online/index.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
