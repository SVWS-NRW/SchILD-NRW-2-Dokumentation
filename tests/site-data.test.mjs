import test from 'node:test'
import assert from 'node:assert/strict'
import vm from 'node:vm'
import { compactSiteData } from '../.vitepress/site-data.mjs'
test('Große verschachtelte Menüs werden ohne Regex-Stacküberlauf und ohne Inhaltsverlust gepackt',()=>{
  const repeated=Array.from({length:1200},(_,i)=>({text:'Eintrag "'+i+'" mit \\ Pfad und <Zeichen>',link:'/artikel-'+i}))
  const source={sidebar:Object.fromEntries(Array.from({length:12},(_,i)=>['/thema-'+i,repeated]))}
  const html='<html><script>window.__VP_SITE_DATA__ = JSON.parse('+JSON.stringify(JSON.stringify(source))+')</script></html>'
  const compact=compactSiteData(html)
  const script=compact.slice(compact.indexOf('<script>')+8,compact.indexOf('</script>'))
  const context={window:{}}
  vm.runInNewContext(script,context)
  assert.equal(JSON.stringify(context.window.__VP_SITE_DATA__),JSON.stringify(source))
  assert(compact.length<html.length)
})
