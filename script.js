async function getAva() {
    const response = await fetch('https://api.telegram.org/bot5281659940:AAEJLcavorU-PoeGX8Q49nGNkDuO9vzGXBE/getUserProfilePhotos?user_id=5285094955')
    const data = await response.json()
  
    let ava = data.result.photos[0][2].file_id
  
    const res = await fetch('https://api.telegram.org/bot5281659940:AAEJLcavorU-PoeGX8Q49nGNkDuO9vzGXBE/getFile?file_id='+ava)
    const dataava = await res.json()
  
    let avaUrl = 'https://api.telegram.org/file/bot5281659940:AAEJLcavorU-PoeGX8Q49nGNkDuO9vzGXBE/' + dataava.result.file_path
  
    document.getElementById('ava').src = avaUrl
  }