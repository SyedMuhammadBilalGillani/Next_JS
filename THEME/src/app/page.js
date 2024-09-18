import ThemeToggle from "@/components/ToogleTheme";

export default function Home() {
  return (
    <>
      <main className="bg-background_light dark:bg-background_dark max-h-dvh h-full max-w-full ">
        <section className="grid grid-cols-12 h-full">
          <div className="col-span-4 h-full pl-4 py-10 pr-52">
            {" "}
            <aside className=" border-[1px] dark:text-zinc-200  border-text_s rounded-3xl p-6 h-full">
              <h3 className='font-semibold'>Bilal</h3>
            </aside>
          </div>
          <div className="col-span-8">
            {" "}
            <ThemeToggle height={40} widht={40} />
          </div>
        </section>
      </main>
    </>
  );
}
