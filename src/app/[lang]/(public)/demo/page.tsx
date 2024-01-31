import { createClient } from "@supabase/supabase-js";

export default function TodoList() {
  const addTodo = async (formData: FormData) => {
    "use server";
    const supabaseUrl = "YOUR_SUPABASE_URL";
    const supabaseKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);
    const todoItem = formData.get("todo");
    if (!todoItem) {
      return;
    }
    // Save todo item to database
    const { data, error } = await supabase.from("todos").insert({
      todo: todoItem,
    });
  };
  return (
    <>
      <h2>Server Actions Demo</h2>
      <div>
        <form action="#" method="POST">
          <div>
            <label htmlFor="todo">Todo</label>
            <div>
              <input
                id="todo"
                name="text"
                type="text"
                placeholder="What needs to be done?"
                required
              />
            </div>
          </div>
          <div>
            <button type="submit"> Add Todo</button>
          </div>
        </form>
      </div>
    </>
  );
}
