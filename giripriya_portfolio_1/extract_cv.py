from pypdf import PdfReader

def extract(path='cv profile.pdf', out='cv_text.txt'):
    reader = PdfReader(path)
    texts = []
    for i, page in enumerate(reader.pages):
        t = page.extract_text() or ''
        texts.append('\n\n--- PAGE %d ---\n\n' % (i+1) + t)
    alltext = '\n'.join(texts)
    with open(out, 'w', encoding='utf-8') as f:
        f.write(alltext)
    print('WROTE', out)
    print('\n---- PREVIEW ----\n')
    print(alltext[:4000])

if __name__ == '__main__':
    extract()
