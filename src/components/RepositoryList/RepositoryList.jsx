import { RepositoryItem } from "../RepositoryItem/RepositoryItem"
import '../../styles/repositories.scss'
import { useEffect, useState } from "react"

//https://api.github.com/users/thiagomart/repos

export function RepositoryList() {
    
    const [repositories, setRepositories] = useState([])
    useEffect(() => {
        fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(data => setRepositories(data.results))

    }, [])
console.log(repositories)
    return (
        <section className="repository-list"> 
            <h1> Lista de Repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}                
            </ul>
        </section>
    )
}