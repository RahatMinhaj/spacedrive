import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { IconAlertTriangle } from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { apiConfig } from "@/config/api.config";
import Link from "next/link";
import { ConfigTable } from "@/components/setup/ConfigTable";
import { validateAPIConfig } from "@/lib/setups";
import { MobileConfigTable } from "@/components/setup/MobileConfigTable";

const StepOne = () => {
  const validate = validateAPIConfig({ config: apiConfig });

  return (
    <Card className="w-11/12 md:w-5/6 lg:w-4/6 xl:w-7/12 2xl:w-1/2 mx-auto mt-20 lg:mt-28 shadow">
      <CardHeader className="space-y-3">
        <CardTitle>Step 1 - Preparation</CardTitle>
        <CardDescription className="leading-normal text-base">
          🎉 Welcome to your new One-Drive-Index Web App. Configure your web
          application then gain an access token to start your journey. Check the
          following configurations before proceeding with authorizing with your
          own Microsoft account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ConfigTable config={apiConfig} />
        <MobileConfigTable config={apiConfig} />
        {validate.success && (
          <p className="mt-3 text-green-600">
            *Your configs looks fine, you may proceed
          </p>
        )}
        {validate?.error && (
          <div className="mt-3">
            {validate.error.errors.map((err, i) => (
              <p key={`err-${i + 1}`} className="text-red-600">
                {err.message}
              </p>
            ))}
          </div>
        )}
        <p className="mt-2 text-yellow-600 flex items-center">
          <span>
            <IconAlertTriangle className="inline-block mr-2 size-5" />
          </span>
          Note: If you see anything missing or incorrect, you may reconfigure
          and redeploy this instance.
        </p>
      </CardContent>
      <CardFooter className="flex">
        {validate.success ? (
          <Link href={"/setup/step-2"} className="ml-auto">
            <Button type="button">
              Next
              <ArrowRightIcon className="ml-2" width={20} height={20} />
            </Button>
          </Link>
        ) : (
          <Button type="button" disabled className="ml-auto" variant="secondary">
            Next
            <ArrowRightIcon className="ml-2" width={20} height={20} />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default StepOne;
