CREATE TABLE "device_code" (
	"id" text PRIMARY KEY NOT NULL,
	"device_code" varchar(255) NOT NULL,
	"user_code" varchar(255) NOT NULL,
	"user_id" text,
	"client_id" text,
	"scope" text,
	"status" text NOT NULL,
	"expires_at" timestamp (6) with time zone NOT NULL,
	"last_polled_at" timestamp (6) with time zone,
	"polling_interval" integer,
	CONSTRAINT "device_code_device_code_unique" UNIQUE("device_code"),
	CONSTRAINT "device_code_user_code_unique" UNIQUE("user_code")
);
