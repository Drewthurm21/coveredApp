export default function LoginForm() {
  return (
    <div>
      <h1>Form Header</h1>
      <form>
        <label
          htmlFor='full-name'
        > label:
          <input id='full-name' type='text' placeholder="input"></input>
        </label>
      </form>
    </div>
  )
}