import { RepositoryItem } from "../RepositoryItem/RepositoryItem"
import '../../styles/repositories.scss'
import { useEffect, useState } from "react"
import { Repository } from "../../interface/state/repository"

//https://api.github.com/users/thiagomart/repos

export function RepositoryList() {
    
    const [repositories, setRepositories] = useState<Repository[]>([])
    useEffect(() => {
        fetch('https://api.github.com/users/thiagomart/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))

    }, [])
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