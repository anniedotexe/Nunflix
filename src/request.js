const API_KEY = ''

const requests = {
    fetchTrending: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    fetchWarriorNun: `/tv/87689?api_key=${API_KEY}&language=en-US`,
    fetchWarriorNunImages: `/tv/87689/images?api_key=${API_KEY}&language=en-US&include_image_language=en,ru,null`,
}
export default requests;