
export function Form({firstName, setFirstName, lastName, setLastName }){
	return <>
			<input id="first-Name" onInput={inputFirstName} type="text" placeholder="First Name" />
			<input id="last-Name" onInput={inputLastName} type="text" placeholder="Last Name" />	
		</>
	function inputFirstName(){
		{setFirstName((firstName) => firstName = document.getElementById("first-Name").value)}
	}
	function inputLastName(){
		{setLastName((lastName) => lastName = document.getElementById("last-Name").value)}
	}
}
