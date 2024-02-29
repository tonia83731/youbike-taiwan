import Link from "next/link";
import { useRouter } from "next/router";

export default function BackStageFooter() {
  const router = useRouter();
  const { route } = router;
  const showLink = route.includes("/login") ? (
    <Link
      href="/"
      className="h-16 py-2 px-1 bg-olive-100 text-white flex justify-center items-center"
    >
      回到前台
    </Link>
  ) : (
    <Link
      href="/backstage/login"
      className="h-16 py-2 px-1 bg-olive-100 text-white flex justify-center items-center"
    >
      登出
    </Link>
  );
  // console.log(router)
  return (
    <footer className="w-full text-center items-center text-lg md:text-xl xl:text-2xl grid grid-cols-3 gap-2 lg:grid-cols-4">
      <div className="w-full h-full bg-lime-100 col-span-2 lg:col-span-3"></div>
      {showLink}
    </footer>
  );
}
