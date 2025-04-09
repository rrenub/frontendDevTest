import React from 'react'
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '/src/shared/components/select/Select'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '/src/shared/components/form/Form'
import { Button } from '/src/shared/components/button/Button'
import { useCart } from '/src/context/CartContext'

const formSchema = z.object({
  color: z.number(),
  storage: z.number(),
})

export default function ProductActions({ product }) {
  const { updateCart } = useCart()

  const defaultColor = product.options.colors[0]
  const defaultStorage = product.options.storages[0]

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: defaultColor?.code ?? '',
      storage: defaultStorage?.code ?? '',
    },
  })

  const onSubmit = async (values) => {
    try {
      const response = await fetch('https://itx-frontend-test.onrender.com/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: product.id,
          colorCode: values.color,
          storageCode: values.storage,
        }),
      })
  
      if (!response.ok) throw new Error("Error al añadir al carrito")
  
      const data = await response.json()
      updateCart(data.count)
    } catch (err) {
      console.error("Fallo al enviar al carrito:", err)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white rounded-lg p-6 pt-0 flex flex-col gap-4">
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Color</FormLabel>
              <FormControl>
              <Select
                onValueChange={(val) => field.onChange(Number(val))}
                value={field.value}
              >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un color" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.options.colors.map((option) => (
                      <SelectItem key={option.code} value={option.code}>{option.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="storage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Almacenamiento</FormLabel>
              <FormControl>
              <Select
                onValueChange={(val) => field.onChange(Number(val))}
                value={field.value}
              >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona almacenamiento" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.options.storages.map((option) => (
                      <SelectItem key={option.code} value={option.code}>{option.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full h-14 mt-2">Añadir al Carrito</Button>
      </form>
    </Form>
  )
}
