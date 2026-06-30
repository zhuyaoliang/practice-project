import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">人员与项目资源管理系统</h1>
          <p className="text-sm text-balance text-muted-foreground">
            中电金信数字科技（潍坊）有限公司专用
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">邮箱</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">密码</FieldLabel>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              忘记密码了吗?
            </a>
          </div>
          <Input id="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit">登录</Button>
        </Field>
        <FieldSeparator>或者使用</FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
            <img src="/lanxin-logo.png" alt="" className="size-4"/>
            蓝信登录
          </Button>
          <FieldDescription className="text-center">
            没有账号?{" "}
            <a href="#" className="underline underline-offset-4">
              注册
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
