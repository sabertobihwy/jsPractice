export default async function getProvinces(){
    const data = await fetch('/api/citylist').then(resp=> resp.json()).then(resp => resp.data)
    return data 
}