import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Wenn sie reinkommt -> Aktiv setzen
            setActiveId(entry.target.id);
          } else {
            // Wenn sie rausgeht UND sie gerade die aktive war -> Zurücksetzen
            // Wir nutzen eine Funktion in setState, um den aktuellsten State zu haben
            setActiveId((current) => 
              current === entry.target.id ? undefined : current
            );
          }
        });
      },
      // rootMargin definiert das "Sichtfenster" für die Logik
      { rootMargin: "-30% 0px -60% 0px" } 
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}