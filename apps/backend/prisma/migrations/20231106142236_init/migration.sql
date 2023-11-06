-- CreateTable
CREATE TABLE "Document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Document_email_key" ON "Document"("email");
