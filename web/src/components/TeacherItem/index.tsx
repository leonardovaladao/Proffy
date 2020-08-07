import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
import api from '../../services/api';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
};

export interface TeacherItemProps {
    teacher: Teacher;
};

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({teacher}) => {
    function createNewConnection() {
        api.post('/connections', {
            user_id: teacher.id,
        })
    };

    return (
        <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt={teacher.name}></img>
                        <div>
                            <strong>{teacher.name}</strong>
                            <strong>{teacher.subject}</strong>
                        </div>
                    </header>

                    <p>
                    {teacher.bio}
                    </p>

                    <footer>
                        <p>
                            Preço/hora 
                            <strong>{teacher.cost}</strong>
                        </p>
                        
                        <a 
                            href={`https://wa.me/${teacher.whatsapp}`} 
                            target="_blank" 
                            onClick={createNewConnection}
                        >
                            <img src={whatsappIcon} alt='Whatsapp'></img>
                            Entrar em contato
                        </a>
                            

                        
                    </footer>
                </article>
    );
}

export default TeacherItem;