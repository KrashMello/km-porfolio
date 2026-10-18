export function useActiveSection(ids: string[]): Ref<string> {
  const active = ref(ids[0] ?? "");

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) active.value = entry.target.id;
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    onBeforeUnmount(() => observer.disconnect());
  });

  return active;
}
