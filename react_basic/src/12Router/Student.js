import { useParams, useSearchParams } from 'react-router-dom';

export default function Student() {
    const { name } = useParams();

    const [searchParam, setSearchParam] = useSearchParams();
    const keyword = searchParam.get('name');
    console.log(keyword);
    return (
        <div>
            학생이름은 <span style={{ color: 'green' }}>{name}</span> 입니다.
            {keyword !== null && (
                <div>
                    실제 이름은 <span style={{ color: 'red' }}>{keyword}</span>
                </div>
            )}
        </div>
    );
}
