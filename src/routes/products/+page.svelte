<script lang="ts">
    // Fetch data from db
    export let data;

    // Example: access price of cakeId = 0
    console.log(data.cakes[0].price);
</script>

<h1>CAKES</h1>
<p>{JSON.stringify(data.cakes)}</p>