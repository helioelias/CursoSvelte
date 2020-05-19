<script>

    import PrettyPrint from "./components/PrettyPrint.svelte";

    let button;

    let formData = {

        email: "",
        select: "",
        range: 0,
        radio: "",
        newsletter: false,
        terms: false
    };

    const submit = () => {
        button.disabled = true;
        setTimeout(() =>{
            button.disabled = false;
            alert(`Estes dados serão enviados para a API: ${JSON.stringify(formData)}`);
        }, 1000);
    };


</script>

<form on:submit|preventDefault={submit}>
<div class="form-group">
    <label for="exampleInputEmail1">Email Address:</label> 
    <input bind:value={formData.email} type="email" class="form-control" id="exampleInputEmail1">
    <small id="emailHelp" class="form-text text-muted">
    We´ll never share your email with anyone else.
    </small>
</div>
<div class="form-group">
    <label for="exampleFormControlSelect1">Example Select</label>
    <select bind:value={formData.select} id="exampleFormControlSelect1" class="form-control">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    </select>
</div>
<div class="form-group">
<label for="formControlRange">Example Range Input</label>
<input type="range" class="form-control-range" id="formControlRange" bind:value={formData.range}>
</div>
<div class="form-check">
    <input bind:group={formData.radio} type="radio" class="form-check-input" id="exampleRadios1" name="exampleRadio" value="option1" checked>
    <label for="exampleRadios1">Default radios</label>
</div>
<div class="form-check">
    <input bind:group={formData.radio} type="radio" class="form-check-input" id="exampleRadios2" name="exampleRadio" value="option2" checked>
    <label for="exampleRadios21">Second radio</label>
</div>
<div class="form-group form-check">
    <input bind:checked={formData.newsletter} type="checkbox" class="form-check-input" id="exampleCheck1">
    <label for="exampleCheck1">Assinar a newsletter?</label>
</div>
<div class="form-group form-check">
    <input bind:checked={formData.terms} type="checkbox" class="form-check-input" id="exampleCheck2">
    <label for="exampleCheck1">Aceito os termos de uso</label>
</div>

<button bind:this={button} type="submit" class="btn btn-primary">Submit</button>

</form>

<PrettyPrint formData={formData}></PrettyPrint>

