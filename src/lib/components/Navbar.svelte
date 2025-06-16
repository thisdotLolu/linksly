<script lang="ts">
    import { onMount } from 'svelte';
    import { Moon, Sun } from '@lucide/svelte';
    import { Cable } from 'lucide-svelte';
  
    let isDark: string | null = null;
  
    onMount(() => {
      isDark = window.localStorage.getItem('dark');
      console.log(isDark)
      if(isDark === 'true'){
        document.documentElement.classList.toggle('dark'); 
      }
    });
  
    function toggleDarkMode(value: 'true' | 'false') {
      localStorage.setItem('dark', value);
      document.documentElement.classList.toggle('dark');
      isDark = value;
    }
  </script>

<div class="px-[30px] w-full h-[70px] border-b border-border bg-background flex items-center justify-between">
    <div class="flex items-center w-[200px] gap-[10px] text-[2rem] text-text">
      <Cable size={30} class="text-text" />
      Linksly
    </div>
  
    {#if isDark === 'false'}
      <Moon
        onclick={() => toggleDarkMode('true')}
        size={30}
        class="!cursor-pointer text-text"
      />
    {:else if isDark === 'true'}
      <Sun
        onclick={() => toggleDarkMode('false')}
        size={30}
        class="!cursor-pointer text-text"
      />
    {:else}
      <Moon
        onclick={() => toggleDarkMode('true')}
        size={30}
        class="!cursor-pointer text-text"
      />
    {/if}
  </div>