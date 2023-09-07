'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { Textarea } from '@/components/ui/textarea'

const FormSchema = z.object({
   fullname: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
   }),
   email: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
   }),
   phone: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
   }),
   message: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
   }),
})

const ContactForm = () => {
   const { toast } = useToast()
   const form = useForm({
      resolver: zodResolver(FormSchema),
   })

   function onSubmit(data) {
      toast({
         title: 'You submitted the following values:',
         description: (
            <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
               <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
            </pre>
         ),
      })
   }
   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
               control={form.control}
               name='fullname'
               render={({ field }) => {
                  return (
                     <FormItem>
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                           <Input placeholder='first last' {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )
               }}
            />
            <FormField
               control={form.control}
               name='email'
               render={({ field }) => {
                  return (
                     <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                           <Input placeholder='email' {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )
               }}
            />
            <FormField
               control={form.control}
               name='phone'
               render={({ field }) => {
                  return (
                     <FormItem>
                        <FormLabel>Phone number</FormLabel>
                        <FormControl>
                           <Input placeholder='number' {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )
               }}
            />
            <FormField
               control={form.control}
               name='message'
               render={({ field }) => {
                  return (
                     <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                           <Textarea placeholder='message' {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )
               }}
            />
            <Button type='submit' className='w-full'>
               Submit
            </Button>
         </form>
      </Form>
   )
}

export default ContactForm
