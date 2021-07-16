const repositoryName = 'unform2'

export function RepositoryItem(props) {
    return (
        <li>
            <strong>
                {props.repository.name }
            </strong>
            <p>
                {props.repository.diameter ?? 'Default'}
            </p>
            <a href={props.repository.climate ?? 'Default'}>
               Ver repositório
            </a>
        </li>
    )
}