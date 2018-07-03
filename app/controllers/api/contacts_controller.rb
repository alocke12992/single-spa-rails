class Api::ContactsController < ApplicationController
  before_action :set_contact, only: [:show, :update, :destroy]

  def index
    render json: Contact.all
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def set_contact
    @contact = Contact.find(params[:id])
  end

  def contact_params
    params.require(:contact).permit(
      :first_name,
      :last_name, 
      :email,
      :phone,
      :address,
      :avatar
    )
  end
end
