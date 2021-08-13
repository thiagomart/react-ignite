import { RepositoryItemProps } from "../../interface/props/repositoryItemProps";



export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <strong>
                {props.repository.name }
            </strong>
            <p>
                {props.repository.description ?? 'Default'}
            </p>
            <a href={props.repository.html_url ?? 'Default'}>
               Ver repositório
            </a>
        </li>
    )
}