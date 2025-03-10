import React, { useEffect, useState } from 'react'
import ins from '../api/request.js'

export default function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await ins.get('/posts')
                const list = resp.data.map((p, index) => {
                    return (
                        <tr key={index}>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td>{p.views}</td>
                        </tr>
                    )
                })
                setPosts(list)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()

    }, [])

    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <th>id</th>
                    <th>title</th>
                    <th>views</th>
                </thead>
                <tbody>
                    {posts}
                </tbody>
            </table>
        </div>
    )
}
