<template>
    <div>
        <div>users</div>
        <pre>{{  users  }}</pre>
    </div>
</template>

<script setup lang="ts">
    const { data: users } = await useFetch('/api/users')
</script>
