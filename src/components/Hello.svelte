<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    // const list = ["Education", "Video Games", "Productivity", "Design"];
    type HelloItem = {
        text: string,
        lang: string
    }

    const hellos: HelloItem[] = [
        {
            text: "Hello!",
            lang: "en",
        },
        {
            text: "Bonjour!",
            lang: "fr",
        },
        {
            text: "Ciao!",
            lang: "it",
        },
        {
            text: "Guten-tag!",
            lang: "de",
        },
        {
            text: "Oi!",
            lang: "pt",
        },
        {
            text: "Yokwe!",
            lang: "mh",
        },
        {
            text: "你好!",
            lang: "zh-Hans",
        },
        {
            text: "こんにちは!",
            lang: "ja",
        },
        {
            text: "안녕하세요!",
            lang: "ko",
        },
        {
            text: "привіт!",
            lang: "uk",
        },
        {
            text: "Ya’at’eeh!",
            lang: "nv",
        },
    ];
    let current = $state(0);
    let flipSwitch = $state(true);
    // let elem: HTMLElement | undefined = $state(undefined);

    onMount(() => {
        let interval = setInterval(() => {
            current += 1;
            flipSwitch = false;
            setTimeout(() => {
                flipSwitch = true;
            });
        }, 7500);

        return interval;
    });
</script>

<h1 class="relative mb-4">
    {#if flipSwitch}
        <span lang={hellos[current % hellos.length].lang} in:fly={{ y: 15 }} class="absolute top-0"
            >{hellos[current % hellos.length].text}</span
        >
    {/if}
    <span lang={hellos[current % hellos.length].lang} class="invisible">{hellos[current % hellos.length].text}</span>
</h1>
