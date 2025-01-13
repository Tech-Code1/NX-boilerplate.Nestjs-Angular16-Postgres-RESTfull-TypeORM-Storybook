import { Injectable, signal, WritableSignal } from '@angular/core';

interface IResourceBaseObject {
  id?: number;
}

type ResourceType<T> = T & IResourceBaseObject;

@Injectable({
  providedIn: 'root',
})
export class ResourceService<T> {
  resources: WritableSignal<ResourceType<T>[]> = signal<ResourceType<T>[]>([]);

  // * common stock manager with: GET, POST, PUT, DELETE

  // * Actualizar los recursos con un nuevo arreglo
  protected setResource = (resources: ResourceType<T>[]) => {
    this.resources.set(resources);
  };

  // * Insertar o actualizar un recurso en la lista
  protected insertResource = (post: ResourceType<T>) => {
    const currentResources = this.resources();
    const index = currentResources.findIndex(
      (resource) => resource.id === post.id
    );

    if (index === -1) {
      // Si no existe, agregamos el nuevo recurso
      this.resources.set([...currentResources, post]);
    } else {
      // Si existe, lo actualizamos
      const updatedResources = [...currentResources];
      updatedResources[index] = post;
      this.resources.set(updatedResources);
    }
  };

  // * Eliminar un recurso por ID
  protected removeResource = (id: number) => {
    const currentResources = this.resources();
    const updatedResources = currentResources.filter(
      (resource) => resource.id !== id
    );
    this.resources.set(updatedResources);
  };
}
