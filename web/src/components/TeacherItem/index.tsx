import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://pbs.twimg.com/profile_images/1286878498183839745/Pl6qro_i_400x400.jpg" alt="Profile"></img>
                        <div>
                            <strong>Professor X</strong>
                            <strong>Matéria</strong>
                        </div>
                    </header>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum, ex eu vehicula elementum, odio quam blandit erat, eu porttitor neque dolor et tellus. Pellentesque nec nisi eget lorem luctus tempor nec eu arcu. Curabitur non metus vitae justo consequat gravida eu vitae metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam tristique ipsum et maximus congue. Proin laoreet maximus est nec pellentesque. Nulla imperdiet ipsum ac lobortis scelerisque. Nulla facilisi. Vestibulum ultrices mi risus, sed cursus neque cursus sed. Nunc vitae tortor tellus. 
                    </p>

                    <footer>
                        <p>
                            Preço/hora 
                        </p>
                        <strong>R$XX,XX</strong>
                        <button type='button'>
                            <img src={whatsappIcon} alt='Whatsapp'></img>
                            Entrar em contato
                        </button>
                            

                        
                    </footer>
                </article>
    );
}

export default TeacherItem;