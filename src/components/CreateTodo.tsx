import "./CreateTodo.scss";
import button from "../assets/buttonAdd.png";

export default function CreateTodo() {
  return (
    <div className="create-item">
      <section>
        <input type="text" placeholder="Title..." />
        <input type="text" placeholder="About..." />
      </section>
      <button>
        <img src={button} alt="button" />
      </button>
    </div>
  );
}
