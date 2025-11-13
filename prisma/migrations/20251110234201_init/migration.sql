-- CreateTable
CREATE TABLE "tipos" (
    "id" SERIAL NOT NULL,
    "nome_tipo" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "tipos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pets" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipoId" INTEGER NOT NULL,
    "idade" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "adotado" BOOLEAN NOT NULL DEFAULT false,
    "vacinado" BOOLEAN NOT NULL DEFAULT false,
    "castrado" BOOLEAN NOT NULL DEFAULT false,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "tipos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
