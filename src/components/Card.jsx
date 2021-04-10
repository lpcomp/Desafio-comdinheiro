import '../styles/components/card.css';

export default function Card ({ name }) {
    return (
        <section>
          <img src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
          <h2>{name}</h2>
        </section>
    );
}