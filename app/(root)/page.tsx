import ButtonCta from "@/components/ButtonCta";

export default function Home() {
  return (
    <>
      <section className="background_image">
        <div className="black_transparent_container">
          <h1 className="heading">
            Bimbel Bu Wahyu - Belajar Membaca & Menulis Dengan Seru
          </h1>

          <p className="sub-heading !max-w-3xl">
            Berikan anak Anda pengalaman belajar yang menyenangkan dan efektif.
            Mari mulai petualangan membaca dan menulis bersama kami!
          </p>

          <ButtonCta />
        </div>
      </section>
    </>
  );
}
