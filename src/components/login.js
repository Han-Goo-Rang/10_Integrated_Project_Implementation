import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-col items-start max-w-[930px] bg-white w-full overflow-hidden">
      {/* Sidebar Hitam */}
      <div className="flex flex-col items-start bg-black rounded-tl-[40px] rounded-bl-[40px] w-full max-w-[469px] p-4">
        <p className="text-white text-sm font-medium font-montserrat">
          Baru di platform? Buat akun
        </p>

        <div className="bg-black border border-white rounded-[15px] px-4 py-2 mt-4">
          <p className="text-white text-sm font-bold font-montserrat">
            SIGN UP
          </p>
        </div>

        <p className="text-white text-2xl font-medium font-montserrat mt-4">
          Los Librario Pinguinos Projeca
        </p>

        <Image
          src="/assets/1713.png"
          alt="ellipse"
          width={75}
          height={75}
          className="rounded-full mt-4"
        />
      </div>

      {/* Konten Utama */}
      <div className="mt-4">
        <p className="text-xs text-black font-normal font-montserrat">
          Masukkan Data untuk Log In
        </p>
      </div>

      <div className="bg-white border border-[#3d3e3e] rounded-[12px] px-4 py-3 max-w-[267px] w-full mt-2">
        <p className="text-sm text-[#727374] font-normal font-montserrat">
          Username
        </p>
      </div>

      <div className="bg-white border border-[#3d3e3e] rounded-[12px] px-4 py-3 max-w-[267px] w-full mt-2">
        <p className="text-sm text-[#727374] font-normal font-montserrat">
          Password
        </p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-black font-medium font-montserrat">
          Lupa password?
        </p>
      </div>

      <div className="text-center mt-4">
        <p className="text-[30px] font-medium leading-[42px] text-black font-montserrat">
          Selamat Datang
          <br />
          Kembali !!
        </p>
      </div>

      <div className="bg-black rounded-[15px] px-4 py-2 mt-4 max-w-[267px] w-full">
        <p className="text-white text-sm font-bold font-montserrat">LOG IN</p>
      </div>

      <Image
        src="/assets/1714.png"
        alt="ellipse"
        width={75}
        height={75}
        className="rounded-full mt-4 rotate-180"
      />
    </div>
  );
}
