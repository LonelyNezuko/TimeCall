export default function getSearch(search)
{
    return search
          .slice(1)
          .split('&')
          .map(p => p.split('='))
          .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
}
