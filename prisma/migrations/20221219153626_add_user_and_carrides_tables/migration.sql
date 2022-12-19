-- CreateTable
CREATE TABLE "users" (
    "ra" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "stars" INTEGER NOT NULL DEFAULT 5,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "users_pkey" PRIMARY KEY ("ra")
);

-- CreateTable
CREATE TABLE "car_rides" (
    "id" SERIAL NOT NULL,
    "rider_ra" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "time_start" TEXT NOT NULL,
    "time_end" TEXT NOT NULL,
    "total_spots" INTEGER NOT NULL,
    "filled_spots" INTEGER NOT NULL DEFAULT 0,
    "passagers" INTEGER[],

    CONSTRAINT "car_rides_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "car_rides" ADD CONSTRAINT "car_rides_rider_ra_fkey" FOREIGN KEY ("rider_ra") REFERENCES "users"("ra") ON DELETE RESTRICT ON UPDATE CASCADE;
