import axios from 'axios'

export const fetchListItems = async () => {
    const items = await axios.get('http://localhost:8080/items')
    return items.data
}
