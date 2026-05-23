const fs = require('fs');
const path = require('path');

const files = [
  'cse-section.jsx',
  'civil-section.jsx',
  'electrical-section.jsx',
  'mechanical-section.jsx',
  'mining-section.jsx'
].map(f => path.join('c:\\Users\\dahar\\Desktop\\satpuda-engg-v0\\frontend\\components\\sections\\academics', f));

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    
    const regex = /\s*\{\/\* Interactive Visual Section.*?\*\/\}\s*<section className="py-24 relative overflow-hidden bg-card\/10">[\s\S]*?(?=\s*\{\/\* (Faculty Section|Brochure CTA Section|Interactive Academic Ecosystem) \*\/\})/i;
    
    if (regex.test(content)) {
      content = content.replace(regex, '\n\n');
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
    } else {
      console.log(`Section not found in ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});
