import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'
import { URL } from 'url'

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://www.poettatech.fr' })

  // Ajouter vos URLs ici
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 })
  sitemap.write({ url: '/poetta', changefreq: 'weekly', priority: 0.8 })
  sitemap.write({ url: '/cv', changefreq: 'monthly', priority: 0.6 })
  sitemap.write({ url: '/portfolio', changefreq: 'monthly', priority: 0.7 })
  sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.5 })

  // Fermer le stream
  sitemap.end()

  // Écrire le sitemap dans un fichier
  const writeStream = createWriteStream(new URL('./public/sitemap.xml', import.meta.url))
  streamToPromise(sitemap.pipe(writeStream)).then(() => console.log('Sitemap généré avec succès.'))
}

generateSitemap()
