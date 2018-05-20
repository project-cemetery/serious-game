import News from '../../models/News'

export default interface NewsInterface {

    getNews(limit?: number): News[]

}
