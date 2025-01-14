"use client";
import React from "react";
import print from "../../public/ezgif-4-e0af09cb2f.gif";
import { motion } from "framer-motion";
import Image from "next/image";

const Welcome = () => {
  const handleNavigate = () => {
    window.location.href =
      "https://wetransfer.com/downloads/a2a258a56945439500cf8defad9e4be220250114054006/cbfd34?t_exp=1737092406&t_lsid=305cd6ac-bf59-4b30-a8d5-7a2a4b93442a&t_network=link&t_rid=ZW1haWx8Njc4NWY4Yjc0ZGZkZTcwNmYwNjczNzQz&t_s=download_link&t_ts=1736833248";
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="bg-white rounded-lg shadow-xl p-10 m-4 max-w-7xl w-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-2 font-sf-regular">
              Bem-vindo ao Printly!{" "}
              <motion.span
                animate={{ rotate: [10, -10, 10, 10] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="inline-block"
              >
                👋
              </motion.span>
            </h1>
            <p className="text-gray-600 text-xl mb-8">Seu novo aplicativo para fazer prints incríveis</p>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-700 font-sf-regular">🚀 Rápido</h3>
                  <p className="text-gray-600 font-sf-regular">Aplicação leve e rápida</p>
                </div>
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-700 font-sf-regular">⚡ Eficiente</h3>
                  <p className="text-gray-600 font-sf-regular">Arquivos mais leves e com mais qualidade</p>
                </div>
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-700 font-sf-regular">🛠️ Customizável</h3>
                  <p className="text-gray-600 font-sf-regular">Customize seus prints como quiser</p>
                </div>
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-700 font-sf-regular">🔒 Seguro</h3>
                  <p className="text-gray-600 font-sf-regular">Arquivos seguros e protegidos</p>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-gray-600 text-sm mt-10 mb-2">Baixe o arquivo zipado e abra o executável</p>

                <button
                  onClick={handleNavigate}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 font-sf-regular"
                >
                  Quero fazer download
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-10 m-4 max-w-7xl w-full flex justify-center items-center flex-col">
          <h1 className="text-5xl font-bold text-gray-800 mb-2 font-sf-regular">Rápido, prático e fácil de usar!</h1>
          <p className="text-gray-600 text-xl mb-10">
            Com o Printly, você pode fazer prints de qualquer arquivo em segundos. Basta selecionar o arquivo e personalizar.
          </p>
          <Image src={print} alt="video" className="rounded-md" />
          <p className="text-gray-600 text-sm mt-10 mb-2">Baixe o arquivo zipado e abra o executável</p>
          <button
            onClick={handleNavigate}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 font-sf-regular"
          >
            Quero fazer download
          </button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
