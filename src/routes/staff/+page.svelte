<script lang="ts">
    // Fetch data from db
    export let data;

    // Example: access userid = 0 email
    console.log(data.staff[0].email);
</script>

<h1>STAFF</h1>
<p>{JSON.stringify(data.staff)}</p>