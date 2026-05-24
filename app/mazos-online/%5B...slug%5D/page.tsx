import fs from 'fs';
import path from 'path';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function MazosPage({ params }: Props) {
  const { slug } = await params;
  const filePath = slug.join('/');
  
  try {
    const htmlPath = path.join(
      process.cwd(),
      'public/mazos-online',
      filePath.endsWith('.html') ? filePath : `${filePath}.html`
    );
    
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
  } catch (error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Página no encontrada</h1>
        <p>No pudimos encontrar: {filePath}</p>
      </div>
    );
  }
}
